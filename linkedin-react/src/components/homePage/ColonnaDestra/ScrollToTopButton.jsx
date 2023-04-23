import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

function ScrollToTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderTooltip = (props) => (
    <Tooltip id="scroll-to-top-tooltip" {...props}>
      Torna su
    </Tooltip>
  );

  return (
    <div id="scroll-to-top-button-container">
      <OverlayTrigger
        placement="left"
        overlay={renderTooltip}
        transition={false}
      >
        <Button
          variant="light"
          id="scroll-to-top-button"
          onClick={handleScrollTop}
        >
          <i className="bi bi-arrow-up-circle-fill"></i>
        </Button>
      </OverlayTrigger>
    </div>
  );
}

export default ScrollToTopButton;