echo off
chcp 1251
title �����
:1
cls
set /p S=������ �����:  
echo:
echo ���� �����:%S%
echo:

echo ������ ����� ������ �����
echo %S:~0,1%
pause>nul

echo:
echo ��������� 3 �����:
echo %S:~-3%
pause>nul

echo:
echo �� ����� ����� ������ 2 ����:
echo %S:~2%
pause>nul

echo:
echo ��� ������ ����
echo %S:~2,3%
pause>nul

echo:
echo �������� ����� ������
echo %S:���=%
pause>nul

echo:
echo ������ ����� ������
echo %S:���=%___%
pause>nul
goto 1