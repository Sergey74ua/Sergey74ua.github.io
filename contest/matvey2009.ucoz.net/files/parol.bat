@echo off
chcp 1251
cls
:1
set /p Pass=������:
if %Pass%==1234 (goto 2) else (echo ������ �� ������ && goto 1)
:2
echo ������ ������
pause >nul