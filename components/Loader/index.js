import { LoaderContainer, IconLoader } from './style';

export const Spinner = ({ className }) => {
  return (
    <LoaderContainer className={className}>
      {/* <p>
        {[<i className="far fa-spinner fa-spin" key="button-icon" />, 'ok']}
      </p> */}
      <IconLoader className="fas fa-circle-notch fa-spin" />
    </LoaderContainer>
  );
};