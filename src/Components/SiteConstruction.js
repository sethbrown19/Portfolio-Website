import React, { Component } from 'react';

class SiteConstruction extends Component {
    siteConstruction;
  render() {

    if(this.props.data){
      var siteConstructionMap = this.props.data.siteConstruction.map(function(siteConstruction){
        return  <li key={siteConstruction.user}>
            <blockquote>
                <h1>Construction of this Site.</h1>
                <div></div>
               <p>{siteConstruction.text}</p>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="siteConstruction">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               {/*<h1>Construction of this Site.</h1>*/}
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {siteConstructionMap}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default SiteConstruction;
