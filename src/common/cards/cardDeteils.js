import React from 'react';
import {Bar} from 'react-chartjs-2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faMinusCircle} from '@fortawesome/free-solid-svg-icons'
import {addProduct,remProduct} from "../../redux/actions"
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";

const Chart=(props)=>{
    return (
      <div>
          <h1>{props.title}</h1>
          <span>{props.description}</span>
            <Bar
            data={{
            labels: ['Kcal', 'Carbs', 'Wheys',
                        'Fats'],
            datasets: [
                {
                label: 'Nutritional values',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [props.kcal,props.carbohydrates, props.wheys, props.fats]
                }
            ]
            }}
            options={{
            title:{
                display:true,
                text:"Values",
                fontSize:20
            },
            legend:{
                display:true,
                position:'right'
            }
            }}
        />
        )
        
      </div>
    );
  }


export default Chart;

