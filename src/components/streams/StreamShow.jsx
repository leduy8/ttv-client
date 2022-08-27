import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{props.stream.title}</h1>
      <h5>{props.stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
