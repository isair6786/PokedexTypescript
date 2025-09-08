
interface IErrorMessage {
    children: React.ReactNode
}

export default function ErrorMessage({children} : IErrorMessage) {
  return (
    <div>
        <p className="text-sm bg-red-100 text-red-600 px-1 mt-2 mb-2 rounded">{children}</p>
    </div>
  )
}
