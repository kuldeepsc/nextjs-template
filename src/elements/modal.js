import PropTypes from 'prop-types';

function BootStrapModal({children, modalAttribute, modalBody, modalButton = false, modalID, modalTitle}) {
  // console.log(props)

  const { buttonClass='btn', size='default' } = modalAttribute;

  return (
    <div className="d-flex
justify-content-center align-items-center"
    >
      {
                modalButton ? (
                  <button
                    type="button"
                    className={buttonClass}
                    data-bs-toggle="modal"
                    data-bs-target={`#${modalID}`}
                  >
                    {modalTitle}
                  </button>
                ) : ''
            }
      <div
        className="modal fade"
        id={modalID}
        tabIndex="-1"
        aria-labelledby={`#${modalID}Label`}
        aria-hidden="true"
      >
        <div className={`modal-dialog ${size ? `modal-${size}` : ''}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id={`${modalID}Label`}>
                {modalTitle}
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BootStrapModal.propTypes = {
  modalID: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default BootStrapModal;
