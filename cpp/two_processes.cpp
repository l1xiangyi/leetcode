#include <iostream>
#include <condition_variable>

using namespace std;
mutex mtx;
condition_variable cond_var;
bool flag = true;

void func1()
{
  while (1) {
    this_thread::sleep_for(chrono::seconds(1));
  }
}

