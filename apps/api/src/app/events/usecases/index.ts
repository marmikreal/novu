import { ProcessSubscriber } from './process-subscriber/process-subscriber.usecase';
import { TriggerEvent } from './trigger-event';
import { SendMessage } from './send-message/send-message.usecase';
import { SendMessageSms } from './send-message/send-message-sms.usecase';
import { SendMessageEmail } from './send-message/send-message-email.usecase';
import { SendMessageInApp } from './send-message/send-message-in-app.usecase';
import { SendMessageChat } from './send-message/send-message-chat.usecase';
import { SendMessagePush } from './send-message/send-message-push.usecase';
import { QueueNextJob } from './queue-next-job/queue-next-job.usecase';
import { Digest } from './send-message/digest/digest.usecase';
import { CancelDelayed } from './cancel-delayed/cancel-delayed.usecase';
import { TriggerEventToAll } from './trigger-event-to-all/trigger-event-to-all.usecase';
import { DigestFilterSteps } from './digest-filter-steps/digest-filter-steps.usecase';
import { DigestFilterStepsBackoff } from './digest-filter-steps/digest-filter-steps-backoff.usecase';
import { DigestFilterStepsRegular } from './digest-filter-steps/digest-filter-steps-regular.usecase';
import { GetDigestEventsRegular } from './send-message/digest/get-digest-events-regular.usecase';
import { GetDigestEventsBackoff } from './send-message/digest/get-digest-events-backoff.usecase';
import { VerifyPayload } from './verify-payload/verify-payload.usecase';

export const USE_CASES = [
  TriggerEvent,
  ProcessSubscriber,
  SendMessage,
  SendMessageSms,
  SendMessageEmail,
  SendMessageInApp,
  SendMessageChat,
  SendMessagePush,
  QueueNextJob,
  Digest,
  CancelDelayed,
  TriggerEventToAll,
  DigestFilterSteps,
  DigestFilterStepsRegular,
  DigestFilterStepsBackoff,
  GetDigestEventsBackoff,
  GetDigestEventsRegular,
  VerifyPayload,
];
