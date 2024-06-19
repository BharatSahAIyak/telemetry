ALTER TABLE event
ADD COLUMN isGuided Nullable(String) AFTER responseType;
ALTER TABLE event
ADD COLUMN isFlowEnd Nullable(String) AFTER isGuided;