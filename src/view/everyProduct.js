import React from "react";
import { fetchEveryItem } from "../functions/api";
import CardLoadingSection from "../common/cards/cardLoadingSection";
import Alert from "../common/cards/alert";
import { Row, Col } from "react-bootstrap";
import CardEveryItem from "../common/cards/everyCardItem";

class EveryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      data: [],
    };
    this.fetchData = this.fetchData.bind(this);
    this.goTo = this.goTo.bind(this);
  }
  fetchData() {
    fetchEveryItem()
      .then((everyItem) => {
        this.setState({
          data: everyItem,
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  }

  componentDidMount() {
    this.fetchData();
  }

  goTo(id) {
    this.props.history.push(`/categories/${id}`);
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <>
            <CardLoadingSection />
          </>
        ) : this.state.isError ? (
          <>
            <Alert/>
          </>
        ) : this.state.data ? (
          <>
            <Row>
              {this.state.data.map((curr, idx) => {
                return (
                  <Col md={4} key={idx}>
                    <CardEveryItem
                      title={curr.title}
                      subtitle={curr.subtitle}
                      description={curr.description}
                      img={curr.images[0].uri}
                      id={curr.id}
                      goTo={() => this.goTo(curr.category.id)}
                      category={curr.category.title}
                    />
                  </Col>
                );
              })}
            </Row>
          </>
        ) : null}
      </>
    );
  }
}

export default EveryItem;