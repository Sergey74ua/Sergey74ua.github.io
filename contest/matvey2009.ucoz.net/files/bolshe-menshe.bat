@echo off
chcp 1251 >nul

:1
set /a G=1+1000*%RANDOM%/32767
   echo %G%

:2
set /p S=������ �����: 

if %S%==%G% (echo �� �������� & goto 1)
if %S% LSS %G% (echo ����� ������ & goto 2)
if %S% GTR %G% (echo ����� ������ & goto 2)