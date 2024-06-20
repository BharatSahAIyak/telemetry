ALTER TABLE event
ADD COLUMN userHistory Nullable(String) AFTER reactionText;