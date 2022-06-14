/**************************** IMPORTS ******************************/
import {app} from "./app"
import {userRouter} from './routes/userRouter'
import {postRouter} from './routes/postRouter'
import {friendshipRouter} from './routes/friendshipRouter'


app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/friend', friendshipRouter)
