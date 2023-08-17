export default function PublicationNotFound() {
  return (
    <div className="w-full ">
      <div className="flex flex-col space-y-3 mt-[70px] px-6">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Upps!</h2>
          <p className="text-neutral-600">It seems that this publication does not longer exist.</p>
        </div>
      </div>
    </div>
  );
}
