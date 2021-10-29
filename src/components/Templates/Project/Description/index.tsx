export type DescriptionTemplateProps = {
  description?: string;
  onChange: (description: string) => void;
};

export const DescriptionTemplate: React.FC<DescriptionTemplateProps> = ({ description, onChange }) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="w-full max-w-3xl px-8">
        <div className="flex items-center px-10 mt-4 bg-white rounded-sm shadow-lg py-14">
          <p className="mr-8 text-lg font-bold uppercase">This will be</p>
          <input
            className="flex-1 px-3 py-2 bg-gray-200 rounded-sm h-14 form-input"
            type="text"
            value={description}
            onChange={(e) => onChange(e.target.value)}
            placeholder="The pots and pan drawer (example)"
          />
        </div>
      </div>
    </div>
  );
};
