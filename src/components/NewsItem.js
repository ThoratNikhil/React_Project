import React from "react";
const NewsItem =(props)=> {
 
    let { title, description, imageUrl, newsUrl,author,date,source } = props;
    return (
      <>
        <div className="my-3">
          <div className="card">
          {/* <div style={{display:"flex",position:'absolute',justifyContent:"flex-end",right:'0'}}>
            <span className=" badge rounded-pill bg-danger"> {source} </span>
            </div> */}
            <div className="d-flex position-absolute justify-content-end end-0">
            <span className=" badge rounded-pill bg-danger"> {source} </span>
            </div>
            <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2024/07/20240704115511_raymond-realty.jpg":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
              </p>
                <p className="card-text"><small className="text-muted">by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer"   className="btn btn-sm btn-dark">
                Read More...
              </a>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default NewsItem;
