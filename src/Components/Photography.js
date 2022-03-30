import React, { Component } from 'react';

class Photography extends Component {
  render() {

    if(this.props.data){
      var photoMap = this.props.data.photos.map(function(photo){
        var projectImage = 'images/photography/' + photo.image;
        return <div key={photo.title} className="columns photography-item">
           <div className="item-wrap">
            {/*<a href={photo.url} title={photo.title}>*/}
               <img alt={photo.title} src={projectImage} />
               <div className="overlay">
                  <div className="photography-item-meta">
                 <h5>{photo.title}</h5>
                     <p>{photo.category}</p>
                  </div>
                </div>
            {/*  <div className="link-icon"><i className="fa fa-link"></i></div>*/}
            {/*</a>*/}
          </div>
        </div>
      })
    }

    return (
      <section id="photography">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Work.</h1>

            <div id="photography-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {photoMap}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Photography;
