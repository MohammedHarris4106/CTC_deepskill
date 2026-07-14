Scenario 1: The bank needs to process monthly interest for all savings accounts.

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest 
AS
BEGIN
    UPDATE Accounts
    SET balance = balance*1.01
    WHERE AccountType = 'Savings';
END;
/

Scenario 2: The bank wants to implement a bonus scheme for employees based on their performance.


CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_dept in varchar2,
    p_bonus in number
)
as
BEGIN
    update employee
    set salary = salary+(salary*p_bonus/100)
    where department=p_dept;
END;
/

Scenario 3: Customers should be able to transfer funds between their accounts.


CREATE OR REPLACE PROCEDURE TransferFunds(
   p_srcAccount IN NUMBER,
   p_destAccount IN NUMBER,
   p_amount IN NUMBER
)
AS
   v_balance NUMBER;
BEGIN
   SELECT Balance
   INTO v_balance
   FROM Accounts
   WHERE AccountID = p_srcAccount;
   IF v_balance >= p_amount THEN
      UPDATE Accounts
      SET Balance = Balance - p_amount
      WHERE AccountID = p_srcAccount;

      UPDATE Accounts
      SET Balance = Balance + p_amount
      WHERE AccountID = p_destAccount;
      COMMIT;

      DBMS_OUTPUT.PUT_LINE('Transfer Successful');
   ELSE
      DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
   END IF;

EXCEPTION
   WHEN NO_DATA_FOUND THEN
      DBMS_OUTPUT.PUT_LINE('Account Not Found');
   WHEN OTHERS THEN
      ROLLBACK;
      DBMS_OUTPUT.PUT_LINE(SQLERRM);
END;
/
