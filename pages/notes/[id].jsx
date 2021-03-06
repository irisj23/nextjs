/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({note}) => {
//   const router = useRouter()
//   const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export async function getServerSideProps({params, req, res}) {
	const response = await fetch(`http://localhost:3000/api/note/${params.id}`)

	if (!response.ok) {
		res.writeHead(302, {location: '/notes'})
		res.end()
		return {props: {}}
	}

	const {data} = await response.json()

	if (data) {
		return {
			props: {note: data}
		}
	}
}
