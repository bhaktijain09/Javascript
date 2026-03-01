// create a object literal for the properties of twitter/ thread post which includes -
// username, content, likes, repost, tags 

const post = {
    username: "@bhaktijain09",
    content: "This is my first post on twitter/thread",
    likes: 9,
    repost: 1,
    tags: ["@bhaktijain09", "@indianthinkers09"]
};

console.log(post);
// prints - 
// {username: '@bhaktijain09', content: 'This is my first post on twitter/thread', likes: 9, repost: 1, tags: Array(2)}
// content: "This is my first post on twitter/thread"
// likes: 9
// repost: 1
// tags: (2) ['@bhaktijain09', '@indianthinkers09']                      // ( tags: Array(2))
// username: "@bhaktijain09"