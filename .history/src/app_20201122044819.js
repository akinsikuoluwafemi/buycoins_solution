import {name} from './'
const token = `5667f344fc3f15486408373bacf0932afb9f6017`;

// const token = process.env.API_KEY;

const fetchRepoCount = `
  query {
        repositoryOwner(login: "akinsikuoluwafemi"){
        repositories{
        totalCount
      }
    }
  }

`;

const fetchRepo = `

 query {
  
  viewer {
    bio
    avatarUrl
    login
   
    
    
    followers{
      totalCount
    }
    following{
      totalCount
    }
    starredRepositories{
      totalCount
    }
    status{
      message
      
      
    }
    location
    websiteUrl
   
    repositories(first: 20, orderBy: {field:UPDATED_AT, direction:DESC}) {
      nodes {
        name
        url 
        viewerHasStarred
        description
        
        
        
        
       
        primaryLanguage{
          name
          color
        }
        updatedAt
        forkCount
        
        stargazerCount
        viewerHasStarred
        licenseInfo{
          name
        }
        
        
        
        owner {
          login
          avatarUrl
          url
          
        	
          
          
          
        
        }
        
      	
      }
    }
  }
}


`;

// select element
let secondSelectTag = document.querySelector(".select-two");
let mobileSelectTag = document.querySelector(".select-twoo");
let profileContent = document.querySelector(".repo-container");
let updatedTime = document.querySelector(".updated_at");
const sidebarContainer = document.querySelector(".sidebar-container");
const tabTwo = document.querySelector(".tab-two");
const totalNumOfRepo = [];
const mobileTab = document.querySelector(".tab-two-mobile");

let allData = [];

const helper = (query) => {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  }).then((res) => res.json());
};

helper(fetchRepo)
  .then((data) => {
    console.log(data.data.viewer);
    allData.push(data.data.viewer);

    let mappedSidebar = allData.map((info) => {
      console.log(info);
      return `
    
      <section class="sidebar">
                
                <div class="sidebar-image-wrapper">
                    <img class="sidebar-image" alt="user-img" src="${info.avatarUrl}"/>
                


                <div class="clip-path">
                    
                    <span class="emoji">
                        <g-emoji alias="thought_balloon" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4ad.png">💭</g-emoji>

                    </span>
                    <span class="status-name">${info.status.message}</span>

                </div>

                <div class="mobile-user-profile">
                    <img class="sidebar-imagee" alt="user-img" src="${info.avatarUrl}"/>
                    <p class="profile-name">${info.login}</p>

                </div>


                <div class="clip-path-two">
                    
                    <span class="emojii">
                        <g-emoji alias="thought_balloon" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4ad.png">💭</g-emoji>

                    </span>
                    <span class="status-namee">${info.status.message}</span>

                </div>
                    


            
                
                    <div>
                        <p class="user-name">${info.login}</p>                
                        <p class="user-about">${info.bio}</p>                

                        <button class="edit">Edit profile</button>
                        
                        <div class="webb">
                            <svg style="fill: #777;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
                            <span> <a href="#" class="web-name">${info.websiteUrl}</a></span>
                        </div>

                        <div class="user-info">
                            <div class="foll"> 
                                
                                <svg style="fill: #777;" class="svg" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
                                <span class="num-followers"><strong>${info.followers.totalCount}</strong> followers</span>
                                
                            </div>
                            <div class="following"><strong>${info.following.totalCount}</strong> following</div>

                            <div class="stars-num">
                                <svg style="fill: #777;" class="svg" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                                <span><strong>${info.starredRepositories.totalCount}</strong></span>

                            </div>
                        </div>

                        

                    <div class="tabss">

                        <div class="tab tab-one">
                                <svg style="fill: #777;" class="overview-logo" height="20" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>
                                <span>Overview</span>

                        </div>

                        <div class="tab tab-two">
                               
                           <svg style="fill: #777;" class="repository-logo" height="20" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                                <span>Repositories</span>
                                <span class="num-rep">${totalNumOfRepo[0]}</span>

                        </div>

                        <div class="tab tab-three">
                                <svg style="fill: #777;" class="proj-logo" height="20" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
                                <span>Projects</span>


                        </div>

                        <div class="tab tab-four">
                            <svg style="fill: #777;" class="package-logo" height="20" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path></svg>
                            <span>Packages</span>


                        </div>

                    </div>

                        

                        <div class="location">
                            <svg style="fill: #777;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            <span class="country">${info.location}</span>
                        </div>

                        <div class="web">
                            <svg style="fill: #777;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
                            <span> <a href="#" class="web-name">${info.websiteUrl}</a></span>
                        </div>

                        <div class="highlights-wrapper">
                            <h1 class="highlights-header">Highlights</h1>
                            
                            <div class="arctic">
                                <svg style="fill: #777;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8.5.75a.75.75 0 00-1.5 0v5.19L4.391 3.33a.75.75 0 10-1.06 1.061L5.939 7H.75a.75.75 0 000 1.5h5.19l-2.61 2.609a.75.75 0 101.061 1.06L7 9.561v5.189a.75.75 0 001.5 0V9.56l2.609 2.61a.75.75 0 101.06-1.061L9.561 8.5h5.189a.75.75 0 000-1.5H9.56l2.61-2.609a.75.75 0 00-1.061-1.06L8.5 5.939V.75z"></path></svg>
                                <span class="arctic-text">Arctic Code Vault Contributor</span>
                                
                                <div class="artic-info-box">
                                    <div class="artic-info-content">
                                        <img  style="border-radius: 50%;" height="70" width="70"  alt="@${info.login}" src="https://avatars0.githubusercontent.com/u/50802773?s=88&amp;u=b04b206e086e61fe62e83e2e5b33951104a7bb7e&amp;v=4">
                                        <div class="info-text-wrapper">
                                            <span style="margin-bottom: .2rem; display:block">Artic Code Vault Contributor</span> <br/>
                                            <span style="margin-bottom: .2rem; display:block">@${info.login} contributed code to several repositories in the 2020 GitHub Archive Program:</span> <br/>
                                            <span style="margin-bottom: .2rem; display:block"><a style="color: #0366D6;" href="#">${info.login}/videos</a>, <a style="color: #0366D6;" href="#">${info.login}/stutern-daily-challenge</a>, <a style="color: #0366D6;" href="#">${info.login}/i-witness</a>, and more!</span>
                                        </div>
                                    </div>
                                
                                </div>

                            </div>

                            

                            <div class="dev-prog">
                                <svg style="fill: #777;" class="" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5.75a.75.75 0 00-1.5 0V2H3.75A1.75 1.75 0 002 3.75V5H.75a.75.75 0 000 1.5H2v3H.75a.75.75 0 000 1.5H2v1.25c0 .966.784 1.75 1.75 1.75H5v1.25a.75.75 0 001.5 0V14h3v1.25a.75.75 0 001.5 0V14h1.25A1.75 1.75 0 0014 12.25V11h1.25a.75.75 0 000-1.5H14v-3h1.25a.75.75 0 000-1.5H14V3.75A1.75 1.75 0 0012.25 2H11V.75a.75.75 0 00-1.5 0V2h-3V.75zm5.75 11.75h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25zM5.75 5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5zm.75 4.5v-3h3v3h-3z"></path></svg>
                                <span> <a href="#" class="web-name">Developer Program Member</a></span>
                                
                            </div>

                            <h1 class="org-header" style="font-weight: 500;">Organisation</h1>
                            <div class="org-images">
                                <img alt="@BuildForSDG" width="32" height="32" src="https://avatars3.githubusercontent.com/u/62082237?s=60&amp;v=4" class="avatar-one">
                                <img alt="@BuildForSDGCohort2" width="32" height="32" src="https://avatars3.githubusercontent.com/u/68904251?s=60&amp;v=4" class="avatar ">
                            </div>


                        </div>


                    </div>
                    
            
            </section>
    
    
    
    
    
    `;
    });
    mappedSidebar = mappedSidebar.join("");
    sidebarContainer.innerHTML = mappedSidebar;
  })
  .catch((error) => {
    console.log(error);
  });

helper(fetchRepoCount)
  .then((data) => {
    let { totalCount } = data.data.repositoryOwner.repositories;
    totalNumOfRepo.push(totalCount);

    let repoNum = totalNumOfRepo.map((num) => {
      return `

                <svg style="fill: #777;" class="repository-logo" height="20" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                <span>Repositories</span>
                <span class="num-rep">${num}</span>
      
      
      `;
    });
    repoNum = repoNum.join("");
    tabTwo.innerHTML = repoNum;
  })
  .catch((error) => {
    console.log(error);
  });

helper(fetchRepo)
  .then((data) => {
    console.log(data.data.viewer.repositories.nodes);
    let { nodes } = data.data.viewer.repositories;
    console.log(nodes);

    let mappRepo = nodes.map((info) => {
      return `
        <div class="repo-card">
                    <div class="repo-prop">
                        <p ><a href="${info.url}" class="repo-link">${
        info.name
      }</a></p>
                        <div class="language">
                            <span style="background: ${
                              info.primaryLanguage.color
                            }" class="color"></span>
                            <span class="primary-language">${
                              info.primaryLanguage.name
                            }</span>

                          ${
                            info.forkCount > 0
                              ? `<div class="fork-container">
                                <svg style="fill: #777;" aria-label="fork" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                                <span style="margin-left: .5rem;">${info.forkCount}</span>
                            </div> `
                              : ``
                          }
                           
                          ${
                            info.stargazerCount > 0
                              ? ` <div class="star-container">
                                <svg class="star-logo" style="fill: #777;" aria-label="star"  viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                                <span style="margin-left: .5rem;">${info.stargazerCount}</span>
                            </div>`
                              : ``
                          }

                            

                           

                        <span class="updated_at">Updated on ${
                          new Date(info.updatedAt).toDateString().slice(8, 10) +
                          ` ${new Date(info.updatedAt)
                            .toDateString()
                            .slice(4, 7)}`
                        } </span>

                        </div>

                    </div>

                    <div class="repo-prop rp-1">

                        ${
                          info.viewerHasStarred
                            ? `<button class="btn-start">

                                <svg class="octicon octicon-star-fill mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>
                            
                                <span class="star-text">
                                UnStar
                            </span>
                        </button>`
                            : `<button class="btn-start">
                                <svg  viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                            <span class="star-text">
                                Star
                            </span>
                        </button>`
                        }
                         

        
                

                    </div>

                </div>

    
    `;
    });
    mappRepo = mappRepo.join("");
    profileContent.innerHTML = mappRepo;
  })
  .catch((error) => {
    console.log(error);
  });
