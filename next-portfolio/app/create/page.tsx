import { createMarkdown } from "@/lib/actions/createMarkdown"; // adjust if path is different

export default function NewMarkdownPage() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Markdown</h1>
      <form action={createMarkdown} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          required
          className="input input-bordered w-full"
        />
        <input
          name="category"
          placeholder="Category"
          required
          className="input input-bordered w-full"
        />
        <input
          name="secondCategory"
          placeholder="secondCategory"
          required
          className="input input-bordered w-full"
        />
        <input
          name="thirdCategory"
          placeholder="thirdCategory"
          required
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
