const IconsTOC = (type, direction) => {
  return (
    <>
      <p>
        Icons start :<i className={`${type} ${direction}`} />
      </p>
      <p>
        {" "}
        :Icons end: <i className={`${type} ${direction}`}></i>
      </p>
    </>
  );
};

export default IconsTOC;
