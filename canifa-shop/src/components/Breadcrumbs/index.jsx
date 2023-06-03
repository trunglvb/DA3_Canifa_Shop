import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const BreadCrumbs = (props) => {
  const navigate = useNavigate();
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" separator="|">
        <Link
          id={uuidv4()}
          underline="hover"
          color="inherit"
          onClick={() => {
            navigate('/home');
          }}
        >
          Trang chủ
        </Link>
        {props?.type && props?.type !== undefined && (
          <Link
            underline="hover"
            color="inherit"
            id={uuidv4()}
            onClick={() => navigate(`${props?.type.path}`)}
          >
            {props?.type?.display}
          </Link>
        )}
        {props?.typeChildren && props?.typeChildren !== undefined && (
          <Link
            underline="hover"
            color="inherit"
            id={uuidv4()}
            onClick={() => navigate(`${props?.type.path}`)}
          >
            {props?.typeChildren?.display}
          </Link>
        )}
        {props?.state && props?.state !== null && (
          <Link underline="hover" color="inherit" id={uuidv4()}>
            {props?.state.option}
          </Link>
        )}
        {props?.option && props?.option !== null && (
          <Link underline="hover" color="inherit" id={uuidv4()}>
            {props?.option.option}
          </Link>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
