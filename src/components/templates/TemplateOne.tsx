type Props = {
  data: {
    name: string;
    email: string;
    title: string;
    summary: string;
  };
};

export default function TemplateOne({ data }: Props) {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{data.name || "Your Name"}</h2>
      <p className="text-blue-600">{data.title}</p>
      <p className="text-sm">{data.email}</p>

      <hr className="my-4" />

      <p>{data.summary}</p>
    </div>
  );
}
