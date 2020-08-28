import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info: 'Sit animi ratione tempora ex repellendus obcaecati ab Ut dolor.',
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Amet ipsa tenetur quod molestiae nisi? Eos nulla ad quisquam',
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free shuttle',
        info: 'Amet et ex odio voluptate ex Quam assumenda quis amet.',
      },
      {
        icon: <FaBeer />,
        title: 'Strongest beer',
        info: 'Sit sequi nobis eius iure quae? Minus eligendi iure eius',
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((items, index) => {
            return (
              <article key={index} className="service">
                <span>{items.icon}</span>
                <h6>{items.title}</h6>
                <p>{items.info}</p>
              </article>
            );
          })}{' '}
        </div>
      </section>
    );
  }
}

export default Services;
