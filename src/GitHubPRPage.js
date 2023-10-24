import React, { useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './GitHubPRPage.css';
import { Button } from 'react-bootstrap';


function GitHubPRPage() {
  const [repoUrl, setRepoUrl] = useState('');
  const [pullRequests, setPullRequests] = useState([]);
const handleRepoUrlChange = (e) => {
    setRepoUrl(e.target.value);
  };

  const fetchPullRequests = async () => {
  // window.location.href = repoUrl
    try {
     let repoData = repoUrl.replace("https://github.com" , "https://api.github.com/repos")
      const response = await axios.get(repoData);
      setPullRequests(response.data);
    } 
    catch (error) {
      console.error(error);
    }
  };

  function commentList(curl){
    console.log("coming")
    var commentCount ;
axios.get(curl).then(
(cresult)=>{
  console.log(cresult.data.length)
commentCount = "comments" + cresult.data.length;
console.log(commentCount)
}
).catch(
  (err)=>{
    console.log(err)
  }
)
return commentCount;
  }

  return (
    <div className="bg-color">
    <div className="github-pr-page">
      <h1>GitHub Pull Requests</h1>
      <br></br>
      <input
        type="text"
        placeholder="Enter GitHub Repo URL"
        value={repoUrl}
        onChange={handleRepoUrlChange}
      /><br></br>
      <br></br>
      <Button variant="dark" onClick={fetchPullRequests}>Fetch PRs</Button>
      <div className="pull-requests">
        {pullRequests.map((pr) => (
          <div key={pr.id} className="pr-card">
            <h2>{pr.title}</h2>
            <Carousel showArrows={true} showThumbs={false}>
              <div className = "image">
                <img src={pr.user.avatar_url} alt={`${pr.user.login}'s avatar`} />
              </div>
            </Carousel>
            <p>Author: {pr.user.login}</p> 
            <p>{pr.comments_url}</p>
            <p>{ commentList(pr.comments_url)   }</p>
            <a href={pr.comments_url}>{pr.comments_url}</a>
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default GitHubPRPage;