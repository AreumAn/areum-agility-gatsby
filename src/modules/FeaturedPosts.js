import React from "react"

const FeaturedPosts = ({ item }) => {
  console.log("fp", item)
  return (
    <section className="jumbotron">
      <h1>{item.customFields.title}</h1>
      <h2>{item.customFields.subTitle}</h2>
    </section>
  )
}
export default FeaturedPosts
