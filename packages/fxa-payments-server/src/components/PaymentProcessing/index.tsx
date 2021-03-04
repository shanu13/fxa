import React from 'react';
import { Localized } from '@fluent/react';

import { LoadingSpinner } from '../LoadingSpinner';
import SubscriptionTitle from '../SubscriptionTitle';
import PaymentLegalBlurb from '../PaymentLegalBlurb';
import { ProviderType } from 'fxa-payments-server/src/lib/PaymentProvider';

import './index.scss';

export type PaymentProcessingProps = {
  provider: ProviderType;
  className?: string;
};

export const PaymentProcessing = ({
  provider,
  className = '',
}: PaymentProcessingProps) => {
  return (
    <>
      <SubscriptionTitle screenType="processing" className={className} />
      <section
        className={`container card payment-processing ${className}`}
        data-testid="payment-processing"
      >
        <div className="wrapper">
          <LoadingSpinner />
          <Localized id="payment-processing-message">
            <p>Please wait while we process your payment...</p>
          </Localized>
        </div>

        <div className="footer" data-testid="footer">
          <PaymentLegalBlurb provider={provider} />
        </div>
      </section>
    </>
  );
};

export default PaymentProcessing;
