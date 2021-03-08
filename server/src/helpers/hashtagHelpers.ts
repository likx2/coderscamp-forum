import { Hashtag as hashtagModel } from '../models/hashtag'



export const  hashtagAddOrUpdate=(hashtags: string[]) => {
    
    hashtags.forEach(async (hashtag) => {
        const foundHashtag = await hashtagModel.findOne({ hashtagName: hashtag })
        if (foundHashtag) {
            let counter = foundHashtag.counter
            await hashtagModel.findOneAndUpdate({ hashtagName: hashtag }, { counter: ++counter })

        }
        else {
            await new hashtagModel({ hashtagName: hashtag, counter: 1 }).save()
        }
    })
}

export const hashtagDelete = (hashtags: string[])=>{
hashtags.forEach(async(hashtag)=>{
     await hashtagModel.findOneAndDelete({ hashtagName: hashtag })
})
}
