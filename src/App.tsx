import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-sm font-medium tracking-widest text-cyan-400 uppercase">
          React + TypeScript + Tailwind CSS
        </p>
        <h1 className="text-5xl font-bold tracking-tight">Ready to build.</h1>
        <p className="text-slate-400">Edit src/App.tsx to get started.</p>
        <button
          type="button"
          className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          onClick={() => setCount((value) => value + 1)}
        >
          Count: {count}
        </button>
      </div>
    </main>
  )
}
