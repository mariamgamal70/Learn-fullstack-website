import React from "react";
import axios from "axios";

function Profile() {
const tracks = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "Learn the most popular programming language for frontend and backend development.",
  },
  {
    id: 2,
    title: "Python",
    description:
      "Master Python, a versatile language used for web development and other applications.",
  },
  {
    id: 3,
    title: "Ruby",
    description:
      "Explore Ruby and its web development framework, Ruby on Rails.",
  },
  {
    id: 4,
    title: "Java",
    description:
      "Build powerful web applications using the Java programming language.",
  },
  {
    id: 5,
    title: "PHP",
    description:
      "Learn PHP for server-side web development and integration with databases.",
  },
  {
    id: 6,
    title: "C#",
    description: "Develop web applications with C# and ASP.NET framework.",
  },
  {
    id: 7,
    title: "Go",
    description:
      "Discover Go (Golang) for building scalable and efficient web services.",
  },
  {
    id: 8,
    title: "TypeScript",
    description:
      "Extend JavaScript with TypeScript for enhanced type checking and tooling support.",
  },
  // Add more tracks as needed...
];

const TrackCard = ({ track }) => {
  return (
    <div className="card" className="track-divs">
      <h2>{track.title}</h2>
      <p>{track.description}</p>
    </div>
  );
};

const WebDevLanguageTracks = () => {
  return (
    <div className="track-cards d-flex flex-row flex-wrap justify-content-center" >
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  );
};


  const [user, setUser] = React.useState({});

 React.useEffect(() => {
    // console.log(document.cookie);
   axios
     .get("http://localhost:3001/profile", {
       headers: {
         Cookie: `sessionId=${document.cookie};`,
       },
       withCredentials: true,
     })
     .then((res) => {
       setUser(res.data);
     })
     .catch((err) => console.log(err));
 }, []);

  return (
    <section className="bg-black text-white" style={{ height: "100dvh" }}>
      <h1 className="p-3">
        Hello {user.firstname} {user.lastname}!
      </h1>
      <p className="p-3">
        Find some info on programming languages and their tracks here
      </p>
      <div >
      {WebDevLanguageTracks()}
      </div>
    </section>
  );
}

export default Profile;
