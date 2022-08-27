import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderActions = () => {
    const { id } = props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to={"/"} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with title: ${props.stream.title}?`;
  };

  return (
    <div>
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
