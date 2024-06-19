ALTER TABLE event
ADD COLUMN responseType Nullable(String) AFTER replyId;