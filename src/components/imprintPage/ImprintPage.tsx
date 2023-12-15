import { NextPage } from 'next';
import { memo } from 'react';

import { HeaderColor, Headline, HeadlineSize } from '@/components/headline/Headline';
import { Text } from '@/components/text/Text';

import styles from './ImprintPage.module.scss';

interface ImprintPageProps {
    className?: string;
}

const ImprintPage: NextPage<ImprintPageProps> = (props) => {

    return (
        <section className={styles.imprint}>
            <div className={styles.imprintTop}>
                <Headline className={styles.title} headerColor={HeaderColor.SECONDARY} size={HeadlineSize.M} headline='h1'>Webseitenbetreiber</Headline>
                <Text> Muslim Zamukaev</Text>
            </div>
            <div>
                <Headline className={styles.subtitle} headerColor={HeaderColor.SECONDARY} size={HeadlineSize.s} headline='h2'>Informationen über das Unternehmen</Headline>
                <Text>
                    Eichhorster Weg 34
                </Text>
                <Text>
                    Berlin, 13435
                </Text>
                <Text>
                    abu.safiia2016@gmail.com
                </Text>
                <Text >
                    015236933626
                </Text>
            </div>
        </section>
    );
}
export default memo(ImprintPage)