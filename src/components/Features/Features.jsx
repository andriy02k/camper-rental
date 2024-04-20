import React from 'react';
import Form from '../Form/Form';
import { Svg } from '../../components/Icons/Icons';
import css from './Features.module.css';

const Features = ({ camper }) => {
  return (
    <div className={css.flex}>
      <div className={css.features}>
        <div className={css.benefits}>
          <div className={css.item}>
            <Svg id={'#icon-Users'} width={24} height={24} />
            {`${camper.adults} adults`}
          </div>
          <div className={css.item}>
            <Svg id={'#icon-trans'} width={24} height={24} />
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.slice(1)}
          </div>
          <div className={css.item}>
            <Svg id={'#icon-Vector'} width={20} height={24} />
            AC
          </div>
          <div className={css.item}>
            <Svg id={'#icon-fuel'} width={24} height={24} />
            {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
          </div>
          <div className={css.item}>
            <Svg id={'#icon-kitchen'} width={24} height={24} />
            {`${camper.details.kitchen} Kitchen`}
          </div>
          <div className={css.item}>
            <Svg id={'#icon-bad'} width={24} height={24} />
            {`${camper.details.beds} Beds`}
          </div>
          <div className={css.item}>
            <Svg id={'#icon-conditioner'} width={24} height={24} />
            {`${camper.details.airConditioner} air conditioner`}
          </div>
          <div className={css.item}>
            <Svg id={'#icon-cd'} width={24} height={24} />
            {`${camper.details.CD} CD`}
          </div>
          <div className={css.item}>
            <Svg id={'#icon-radio'} width={24} height={24} />
            {`${camper.details.radio} radio`}
          </div>
          <div className={css.item}>
            <Svg id={'#icon-hob'} width={24} height={24} />
            {`${camper.details.hob} hob`}
          </div>
        </div>
        <div className={css.details}>
          <h3 className={css.title}>Vehicle details</h3>
          <div className={css.params}>
            <p>Form</p>
            <p>{camper.form.charAt(0).toUpperCase() + camper.form.slice(1)}</p>
          </div>
          <div className={css.params}>
            <p>Length</p>
            <p>{camper.length}</p>
          </div>
          <div className={css.params}>
            <p>Width</p>
            <p>{camper.width}</p>
          </div>
          <div className={css.params}>
            <p>Height</p>
            <p>{camper.height}</p>
          </div>
          <div className={css.params}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </div>
          <div className={css.params}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </div>
        </div>
      </div>

      <Form />
    </div>
  );
};

export default Features;
