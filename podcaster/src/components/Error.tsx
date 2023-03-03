import Swal from "sweetalert2";
import { FC, useEffect } from "react";

type Props = {
  error: string | undefined;
};

const Error: FC<Props> = ({ error }) => {
  useEffect(() => {
    error && Swal.fire({ text: error });   
  }, []);

  return null;
};

export default Error;