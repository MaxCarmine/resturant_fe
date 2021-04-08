import React from "react"
import Alert from "../common/cards/alert"
import Chart from "../common/cards/cardDeteils";
import CardLoadingSection from "../common/cards/cardLoadingSection";
import {fetchItemDeteils} from "../functions/api"
import {withRouter} from "react-router-dom"



class Deteils extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            error:false,
            data:null
        }
        this.fetchData=this.fetchData.bind(this);
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData(){
        this.setState({loading:true,error:false})
        fetchItemDeteils(this.props.match.params.id)
        .then(response=>{
            this.setState({
                data:response
            })
        })
        .catch(error=>{
            this.setState({
                error:true
            })
        })
        .finally(()=>{
            this.setState({
                loading:false
            })
        })
    }

    render(){
        return(
            
            <div className="box">
                {
                    this.state.loading ?(
                        <CardLoadingSection/>
                    )

                    :this.state.error ?(
                        <Alert retryCallBack={()=>this.fetchData()}></Alert>
                    )
                    :this.state.data ?(
                        
                       <Chart
                        title={this.state.data.title}
                        description={this.state.data.description}
                        kcal={this.state.data.kcal}
                        carbohydrates={this.state.data.macros.carbohydrates}
                        wheys={this.state.data.macros.wheys}
                        fats={this.state.data.macros.fats}
                       />
                    ):null
                }

            </div>
        )
    }
}




export default withRouter(Deteils);