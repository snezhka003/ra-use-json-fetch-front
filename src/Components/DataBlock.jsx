import useJsonFetch from "../hooks/useJsonFetch";
import PropTypes from 'prop-types';

export default function DataBlock(props) {
    const { url, header } = props;
    const [data, loading, error] = useJsonFetch(url, []);

    return (
        <div className="data_block"> 
            {header && <p>header: {header}</p>}
            {data.status && <p>data: {data.status}</p>}
            {loading && <p>loading: Идет загрузка</p>}
            {error && <p>error: {error.message}</p>}
        </div>
    );
}

DataBlock.propTypes = {
    url: PropTypes.any,
    header: PropTypes.any,
}