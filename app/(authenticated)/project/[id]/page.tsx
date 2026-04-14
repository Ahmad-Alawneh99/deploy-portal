export default async function Project({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  return (
    <div className="p-6 pt-0 flex flex-col">
      Project page
      {' '}
      {id}
    </div>
  );
}
