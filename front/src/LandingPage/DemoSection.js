import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import bank from './../../public/img/bank-demo.png'
import bank from './bank-demo.png';

import './DemoSection.css'

const DemoSection = (props) => {
  return (
    <div className='demo-section-container'>
      <Row className='demo-section'>
        <Col xs={6}>
          <div className='demo-text-parent'>
            <div className='demo-text'>
              <h2>
                Easy Bank Integration
              </h2>
              <div>
                Seamlessly connect to thousands of banks and we’ll automatically retrieve your transactions
              </div>
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <div className='demo-image-parent'>
            <div className='demo-image-child demo-image-bank'>
              {/* <img className='demo-image' src="/img/bank-demo.png" alt="Bank Integration"></img> */}
              <img className='demo-image' src={bank} alt="Bank Integration"></img>
            </div>
          </div>
        </Col>
      </Row>

      <Row className='demo-section'>
        <Col xs={6}>
          <div className='demo-image-parent'>
            <div className='demo-image-child demo-image-rule'>
              <img className='demo-image' src="/img/rule-demo.png" alt="Rule Creation Modal"></img>
            </div>
          </div>
        </Col>

        <Col xs={6}>
          <div className='demo-text-parent'>
            <div className='demo-text'>
              <h2>
                Make your own rules
              </h2>
              <div>
                Create category or exclusion rules that apply to a specific transactions, names, or entire categories.
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className='demo-section'>
        <Col xs={6}>
          <div className='demo-text-parent'>
            <div className='demo-text'>
              <h2>
                Evaluate
              </h2>
              <div>
                Review where you’re spending the most money and drill down to see specific transactions
              </div>
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <div className='demo-image-parent'>
            <div className='demo-image-child demo-image-summary'>
              <img className='demo-image summary-image' src="/img/summary-demo.png" alt="Summary"></img>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DemoSection;
