export function ErrorMessage({ error }: { error: string }) {
  return (
    <p className="text-sm font-medium leading-none text-red-500">{error}</p>
  );
}
