@echo off
chcp 1251
cls
:1
set /p pass=������� ������:
if %pass%==123456789 (goto 2) else (echo ������������ ������. ���������� ��� ��� && goto 1)
:2
cls
echo ������ ������.
pause>nul