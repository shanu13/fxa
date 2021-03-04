import React from 'react';
import { Localized } from '@fluent/react';
import { StripeError } from '@stripe/stripe-js';

import { getErrorMessage } from '../../lib/errors';
import errorIcon from '../../images/error.svg';
import SubscriptionTitle from '../SubscriptionTitle';

import './index.scss';

type GeneralError = {
  code: string;
};

export type PaymentErrorViewProps = {
  error: undefined | StripeError | GeneralError;
  onRetry: Function;
  className?: string;
};

export const PaymentErrorView = ({
  error,
  onRetry,
  className = '',
}: PaymentErrorViewProps) => {
  return error ? (
    <>
      <SubscriptionTitle screenType="error" className={className} />
      <section
        className={`container card payment-error ${className}`}
        data-testid="payment-error"
      >
        <div className="wrapper">
          <img id="error-icon" src={errorIcon} alt="error icon" />
          <div>
            <Localized id={getErrorMessage(error.code || 'UNKNOWN')}>
              <p data-testid="error-payment-submission">
                {getErrorMessage(error.code || 'UNKNOWN')}
              </p>
            </Localized>
          </div>
        </div>

        <div className="footer" data-testid="footer">
          <Localized id="payment-error-retry-button">
            <button
              data-testid="retry-link"
              className="button retry-link"
              onClick={() => onRetry()}
            >
              Try Again
            </button>
          </Localized>
        </div>
      </section>
    </>
  ) : null;
};

export default PaymentErrorView;
