import nc from 'next-connect'

const handler = nc()

.get((req, res) => {
	res.json('get okk')
})

.post((req, res) => {
	res.json('post ok')
})

export default handler;
