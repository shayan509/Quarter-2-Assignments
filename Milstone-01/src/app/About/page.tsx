export default async function About() {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 5000)
    });

    return (
        <div className="Content">
            <h1>
                About Page
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, quis iste enim laboriosam aliquam suscipit numquam voluptatem fuga magni vel praesentium mollitia odit nobis quibusdam fugiat unde sequi iure error similique totam, asperiores temporibus incidunt.
            </p>
        </div>
    )
}