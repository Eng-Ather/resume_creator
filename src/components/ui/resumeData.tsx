// import Form from 'next/form'
 
export default function FormData() {
  return (
    <form  action="/search">
      <input className="bg-slate-400 p-3 mr-3" name="query" />
      <button className="bg-blue-300 p-2" type="submit">Submit</button>
    </form>
  )
}