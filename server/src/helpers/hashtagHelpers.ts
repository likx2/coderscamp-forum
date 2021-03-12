import { Hashtag } from '../models/hashtag'



export const createHashtag = (hashtags: string[]) => {

    hashtags.forEach(async (hashtag) => {
        const foundHashtag = await Hashtag.findOne({ name: hashtag })

        if (foundHashtag) {

            await Hashtag.findOneAndUpdate({ name: hashtag }, { $inc: { amount: 1 } })

        }

        else {

            await new Hashtag({ name: hashtag, amount: 1 }).save()
        }
    })

}

export const updateHashtag = async (hashtags: string[], existedHashtags: string[]) => {

    await deleteHashtag(existedHashtags)

    createHashtag(hashtags)

}




export const deleteHashtag = (hashtags: string[]) => {


    Promise.all(
        hashtags.map(hashtag => Hashtag.findOneAndUpdate({ name: hashtag }, { $inc: { amount: -1 } })
        )
    )
        .then(() => {
            Promise.all(
                hashtags.map(hashtag => Hashtag.findOneAndDelete({ $and: [{ name: hashtag }, { amount: 0 }] }))
            )
        })
    // hashtags.forEach(async (hashtag) => {
    //     await Hashtag.findOneAndUpdate({ name: hashtag }, { $inc: { amount: -1 } })
    //     await Hashtag.findOneAndDelete({ $and: [{ name: hashtag }, { amount: 0 }] })
    // })
}


