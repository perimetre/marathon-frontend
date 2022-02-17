import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FilePlus, X } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { CreateListMutation, useCreateListMutation } from '../../../apollo/generated/graphql';
import env from '../../../env';
import { CatchGraphqlError, getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';
import Button from '../../UI/Button';
import ReactPortal from '../../UI/ReactPortal';
import Spinner from '../../UI/Spinner';
import Toastr, { ToastrRef } from '../../UI/Toastr';

type CreateListButtonProps = {
  projectId: number;
};

const CreateListButton: React.FC<CreateListButtonProps> = ({ projectId }) => {
  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Mutations
  const [createList, { loading: createListLoading }] = useCreateListMutation();

  // ***********
  // ** Business logic
  // ***********

  const { NEXT_PUBLIC_MARATHON_API, NEXT_PUBLIC_MARATHON_API_LIST } = useMemo(env, []);

  const [createListError, setCreateListError] = useState<string | undefined>();
  const [lastCreatedList, setLastCreatedList] = useState<CreateListMutation | undefined>(undefined);
  const toastRef = useRef<ToastrRef>(null);

  const listUrl = useMemo(() => {
    if (!NEXT_PUBLIC_MARATHON_API_LIST || !NEXT_PUBLIC_MARATHON_API) return;

    const url = new URL(NEXT_PUBLIC_MARATHON_API_LIST, NEXT_PUBLIC_MARATHON_API);

    if (lastCreatedList?.createList?.externalId) {
      url.searchParams.append('oid', lastCreatedList.createList.externalId);
    }

    return url.toString();
  }, [NEXT_PUBLIC_MARATHON_API, NEXT_PUBLIC_MARATHON_API_LIST, lastCreatedList]);

  const handleCreateList = useCallback(async () => {
    setLastCreatedList(undefined);
    if (projectId) {
      try {
        const { data: result } = await createList({
          variables: {
            projectId
          }
        });

        setLastCreatedList(result || undefined);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        const { graphQLErrors, networkError }: CatchGraphqlError = err;
        // If failed we'll get here
        // Get the locale id for the error
        const error = getLocaleIdFromGraphqlError(graphQLErrors, networkError);

        // Update the error state, which will display the error
        if (error) {
          toastRef.current?.open(3, () => {
            setCreateListError(undefined);
          });
          setCreateListError(error);
        }
      }
    }
  }, [createList, projectId]);

  return (
    <>
      <Button className="whitespace-pre group" onClick={handleCreateList} disabled={createListLoading}>
        {createListLoading ? (
          <Spinner className="w-6 h-6" />
        ) : (
          <>
            <span>
              <FormattedMessage id="cart.createList" />
            </span>
            <FilePlus className="text-2xl" />
          </>
        )}
      </Button>
      <ReactPortal selector="#cart-header">
        {!!lastCreatedList && (
          <div className="container p-4 mx-auto mt-12 bg-white border border-gray-200 border-solid rounded print:hidden">
            <div className="flex items-center justify-between w-full">
              <p>
                <FormattedMessage
                  id="cart.listCreatedSuccessfully"
                  values={{
                    name: lastCreatedList?.createList?.name,
                    bold: (msg: string) => <span className="font-bold">{msg}</span>,
                    url: (msg: string) => (
                      <a className="text-mui-primary hover:underline" href={listUrl} target="_blank" rel="noreferrer">
                        {msg}
                      </a>
                    )
                  }}
                />
              </p>
              <button className="p-4 mui-btn-icon text-mui-paragraph-900" onClick={() => setLastCreatedList(undefined)}>
                <X className="mui-animate-scaleHover-target" />
              </button>
            </div>
          </div>
        )}
      </ReactPortal>
      <Toastr ref={toastRef} variant="error">
        {createListError && <FormattedMessage id={createListError} />}
      </Toastr>
    </>
  );
};

export default CreateListButton;
