import ImprintPage from '@/components/imprintPage/ImprintPage';
import { NextPage } from 'next';

interface ImprintProps {
    className?: string;
}

const Imprint: NextPage<ImprintProps> = (props) => {
    const { className } = props;

    return <ImprintPage />;
}
export default Imprint;