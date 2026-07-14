Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.

SET SERVEROUTPUT ON;
BEGIN
   FOR data IN (
      SELECT c.CustomerID,l.LoanID,FLOOR(MONTHS_BETWEEN(SYSDATE,c.DOB)/12) age
      FROM Customers c JOIN Loans l
      ON c.CustomerID = l.CustomerID
   )
   LOOP
      IF data.age > 60 THEN
         UPDATE Loans
         SET InterestRate = InterestRate - 1
         WHERE LoanID = data.LoanID;
      END IF;
   END LOOP;
END;
/

Scenario 2: A customer can be promoted to VIP status based on their balance.

BEGIN
   FOR data IN (
      SELECT CustomerID,Balance
      FROM Customers
   )
   LOOP
      IF data.Balance > 10000 THEN
         UPDATE Customers
         SET IsVIP = 'TRUE'
         WHERE CustomerID = data.CustomerID;
      END IF;
   END LOOP;
END;
/

Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.

BEGIN
   FOR data IN (
      SELECT c.Name,l.LoanID,l.EndDate
      FROM Customers c
      JOIN Loans l
      ON c.CustomerID = l.CustomerID
      WHERE l.EndDate BETWEEN SYSDATE
      AND SYSDATE + 30
   )
   LOOP
      DBMS_OUTPUT.PUT_LINE( 'Reminder: Loan ' || data.LoanID || ' for '|| data.Name|| ' due on '|| data.EndDate);
   END LOOP;
END;
/